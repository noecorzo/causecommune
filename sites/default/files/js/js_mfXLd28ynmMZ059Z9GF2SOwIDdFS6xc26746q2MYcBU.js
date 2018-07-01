/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Drupal) {
  Drupal.quickedit.editors.image = Drupal.quickedit.EditorView.extend({
    initialize: function initialize(options) {
      Drupal.quickedit.EditorView.prototype.initialize.call(this, options);

      this.model.set('originalValue', this.$el.html().trim());

      this.model.set('currentValue', function (index, value) {
        var matches = $(this).attr('name').match(/(alt|title)]$/);
        if (matches) {
          var name = matches[1];
          var $toolgroup = $('#' + options.fieldModel.toolbarView.getMainWysiwygToolgroupId());
          var $input = $toolgroup.find('.quickedit-image-field-info input[name="' + name + '"]');
          if ($input.length) {
            return $input.val();
          }
        }
      });
    },
    stateChange: function stateChange(fieldModel, state, options) {
      var from = fieldModel.previous('state');
      switch (state) {
        case 'inactive':
          break;

        case 'candidate':
          if (from !== 'inactive') {
            this.$el.find('.quickedit-image-dropzone').remove();
            this.$el.removeClass('quickedit-image-element');
          }
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          _.defer(function () {
            fieldModel.set('state', 'active');
          });
          break;

        case 'active':
          {
            var self = this;

            this.$el.addClass('quickedit-image-element');

            var $dropzone = this.renderDropzone('upload', Drupal.t('Drop file here or click to upload'));

            $dropzone.on('dragenter', function (e) {
              $(this).addClass('hover');
            });
            $dropzone.on('dragleave', function (e) {
              $(this).removeClass('hover');
            });

            $dropzone.on('drop', function (e) {
              if (e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files.length) {
                $(this).removeClass('hover');
                self.uploadImage(e.originalEvent.dataTransfer.files[0]);
              }
            });

            $dropzone.on('click', function (e) {
              $('<input type="file">').trigger('click').on('change', function () {
                if (this.files.length) {
                  self.uploadImage(this.files[0]);
                }
              });
            });

            $dropzone.on('dragover dragenter dragleave drop click', function (e) {
              e.preventDefault();
              e.stopPropagation();
            });

            this.renderToolbar(fieldModel);
            break;
          }

        case 'changed':
          break;

        case 'saving':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }

          this.save(options);
          break;

        case 'saved':
          break;

        case 'invalid':
          this.showValidationErrors();
          break;
      }
    },
    uploadImage: function uploadImage(file) {
      this.renderDropzone('upload loading', Drupal.t('Uploading <i>@file</i>…', { '@file': file.name }));

      var fieldID = this.fieldModel.get('fieldID');
      var url = Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/image/upload/!entity_type/!id/!field_name/!langcode/!view_mode'));

      var data = new FormData();
      data.append('files[image]', file);

      var self = this;
      this.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function success(response) {
          var $el = $(self.fieldModel.get('el'));

          self.fieldModel.set('state', 'changed');
          self.fieldModel.get('entity').set('inTempStore', true);
          self.removeValidationErrors();

          var $content = $(response.html).closest('[data-quickedit-field-id]').children();
          $el.empty().append($content);
        }
      });
    },
    ajax: function ajax(options) {
      var defaultOptions = {
        context: this,
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        error: function error() {
          this.renderDropzone('error', Drupal.t('A server error has occurred.'));
        }
      };

      var ajaxOptions = $.extend(defaultOptions, options);
      var successCallback = ajaxOptions.success;

      ajaxOptions.success = function (response) {
        if (response.main_error) {
          this.renderDropzone('error', response.main_error);
          if (response.errors.length) {
            this.model.set('validationErrors', response.errors);
          }
          this.showValidationErrors();
        } else {
          successCallback(response);
        }
      };

      $.ajax(ajaxOptions);
    },
    renderToolbar: function renderToolbar(fieldModel) {
      var $toolgroup = $('#' + fieldModel.toolbarView.getMainWysiwygToolgroupId());
      var $toolbar = $toolgroup.find('.quickedit-image-field-info');
      if ($toolbar.length === 0) {
        var fieldID = fieldModel.get('fieldID');
        var url = Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/image/info/!entity_type/!id/!field_name/!langcode/!view_mode'));
        var self = this;
        self.ajax({
          type: 'GET',
          url: url,
          success: function success(response) {
            $toolbar = $(Drupal.theme.quickeditImageToolbar(response));
            $toolgroup.append($toolbar);
            $toolbar.on('keyup paste', function () {
              fieldModel.set('state', 'changed');
            });

            fieldModel.get('entity').toolbarView.position();
          }
        });
      }
    },
    renderDropzone: function renderDropzone(state, text) {
      var $dropzone = this.$el.find('.quickedit-image-dropzone');

      if ($dropzone.length) {
        $dropzone.removeClass('upload error hover loading').addClass('.quickedit-image-dropzone ' + state).children('.quickedit-image-text').html(text);
      } else {
        $dropzone = $(Drupal.theme('quickeditImageDropzone', {
          state: state,
          text: text
        }));
        this.$el.append($dropzone);
      }

      return $dropzone;
    },
    revert: function revert() {
      this.$el.html(this.model.get('originalValue'));
    },
    getQuickEditUISettings: function getQuickEditUISettings() {
      return { padding: false, unifiedToolbar: true, fullWidthToolbar: true, popup: false };
    },
    showValidationErrors: function showValidationErrors() {
      var errors = Drupal.theme('quickeditImageErrors', {
        errors: this.model.get('validationErrors')
      });
      $('#' + this.fieldModel.toolbarView.getMainWysiwygToolgroupId()).append(errors);
      this.getEditedElement().addClass('quickedit-validation-error');

      this.fieldModel.get('entity').toolbarView.position();
    },
    removeValidationErrors: function removeValidationErrors() {
      $('#' + this.fieldModel.toolbarView.getMainWysiwygToolgroupId()).find('.quickedit-image-errors').remove();
      this.getEditedElement().removeClass('quickedit-validation-error');
    }
  });
})(jQuery, _, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.quickeditImageErrors = function (settings) {
    return '<div class="quickedit-image-errors">' + settings.errors + '</div>';
  };

  Drupal.theme.quickeditImageDropzone = function (settings) {
    return '<div class="quickedit-image-dropzone ' + settings.state + '">' + '  <i class="quickedit-image-icon"></i>' + ('  <span class="quickedit-image-text">' + settings.text + '</span>') + '</div>';
  };

  Drupal.theme.quickeditImageToolbar = function (settings) {
    var html = '<form class="quickedit-image-field-info">';
    if (settings.alt_field) {
      html += '' + ('  <div>' + '    <label for="alt" class="') + (settings.alt_field_required ? 'required' : '') + '">' + Drupal.t('Alternative text') + '</label>' + ('    <input type="text" placeholder="' + settings.alt + '" value="' + settings.alt + '" name="alt" ' + (settings.alt_field_required ? 'required' : '') + '/>') + '  </div>';
    }
    if (settings.title_field) {
      html += '' + ('  <div>' + '    <label for="title" class="') + (settings.title_field_required ? 'form-required' : '') + '">' + Drupal.t('Title') + '</label>' + ('    <input type="text" placeholder="' + settings.title + '" value="' + settings.title + '" name="title" ' + (settings.title_field_required ? 'required' : '') + '/>') + '  </div>';
    }
    html += '</form>';

    return html;
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, _) {
  Drupal.quickedit.editors.form = Drupal.quickedit.EditorView.extend({
    $formContainer: null,

    formSaveAjax: null,

    stateChange: function stateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from !== 'inactive') {
            this.removeForm();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          if (from !== 'invalid') {
            this.loadForm();
          }
          break;

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          this.save();
          break;

        case 'saved':
          break;

        case 'invalid':
          this.showValidationErrors();
          break;
      }
    },
    getQuickEditUISettings: function getQuickEditUISettings() {
      return { padding: true, unifiedToolbar: true, fullWidthToolbar: true, popup: true };
    },
    loadForm: function loadForm() {
      var fieldModel = this.fieldModel;

      var id = 'quickedit-form-for-' + fieldModel.id.replace(/[/[\]]/g, '_');

      var $formContainer = $(Drupal.theme('quickeditFormContainer', {
        id: id,
        loadingMsg: Drupal.t('Loading…')
      }));
      this.$formContainer = $formContainer;
      $formContainer.find('.quickedit-form').addClass('quickedit-editable quickedit-highlighted quickedit-editing').attr('role', 'dialog');

      if (this.$el.css('display') === 'inline') {
        $formContainer.prependTo(this.$el.offsetParent());

        var pos = this.$el.position();
        $formContainer.css('left', pos.left).css('top', pos.top);
      } else {
        $formContainer.insertBefore(this.$el);
      }

      var formOptions = {
        fieldID: fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: false,

        reset: !fieldModel.get('entity').get('inTempStore')
      };
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        Drupal.AjaxCommands.prototype.insert(ajax, {
          data: form,
          selector: '#' + id + ' .placeholder'
        });

        $formContainer.on('formUpdated.quickedit', ':input', function (event) {
          var state = fieldModel.get('state');

          if (state === 'invalid') {
            fieldModel.set('state', 'activating');
          } else {
              fieldModel.set('state', 'changed');
            }
        }).on('keypress.quickedit', 'input', function (event) {
          if (event.keyCode === 13) {
            return false;
          }
        });

        fieldModel.set('state', 'active');
      });
    },
    removeForm: function removeForm() {
      if (this.$formContainer === null) {
        return;
      }

      delete this.formSaveAjax;

      Drupal.detachBehaviors(this.$formContainer.get(0), null, 'unload');
      this.$formContainer.off('change.quickedit', ':input').off('keypress.quickedit', 'input').remove();
      this.$formContainer = null;
    },
    save: function save() {
      var $formContainer = this.$formContainer;
      var $submit = $formContainer.find('.quickedit-form-submit');
      var editorModel = this.model;
      var fieldModel = this.fieldModel;

      function cleanUpAjax() {
        Drupal.quickedit.util.form.unajaxifySaving(formSaveAjax);
        formSaveAjax = null;
      }

      var formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving({
        nocssjs: false,
        other_view_modes: fieldModel.findOtherViewModes()
      }, $submit);

      formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
        cleanUpAjax();

        fieldModel.set('state', 'saved');

        fieldModel.set('htmlForOtherViewModes', response.other_view_modes);

        _.defer(function () {
          fieldModel.set('html', response.data);
        });
      };

      formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
        editorModel.set('validationErrors', response.data);
        fieldModel.set('state', 'invalid');
      };

      formSaveAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        Drupal.AjaxCommands.prototype.insert(ajax, {
          data: response.data,
          selector: '#' + $formContainer.attr('id') + ' form'
        });
      };

      $submit.trigger('click.quickedit');
    },
    showValidationErrors: function showValidationErrors() {
      this.$formContainer.find('.quickedit-form').addClass('quickedit-validation-error').find('form').prepend(this.model.get('validationErrors'));
    }
  });
})(jQuery, Drupal, _);;
