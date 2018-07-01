<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 14-03-18
 * Time: 14:57
 */

namespace Drupal\first_module\Plugin\Field\FieldWidget;


use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldWidget;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class SocialMediaFacebookWidget
 * @package Drupal\first_module\Plugin\Field\FieldWidget
 *
 * @FieldWidget(
 *     id="socialmedia_facebook_widget",
 *     label=@Translation("Widget Reseux Sociaux"),
 *     field_types={"socialmedia_facebook"}
 * )
 */
class SocialMediaFacebookWidget extends WidgetBase
{
    public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state)
    {
        $element['facebook'] = [
            '#type' => 'textfield',
            '#default_value' => isset($items[$delta]->facebook) ? $items[$delta]->facebook : NULL,
            '#title' => t('Facebook'),
            '#size' => 50
        ];
        return $element;
    }
}