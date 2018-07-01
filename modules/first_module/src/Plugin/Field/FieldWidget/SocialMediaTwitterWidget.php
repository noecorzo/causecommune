<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 13-03-18
 * Time: 14:51
 */

namespace Drupal\first_module\Plugin\Field\FieldWidget;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldWidget;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class SocialMediaTwitterWidget
 * @package Drupal\first_module\Plugin\Field\FieldWidget
 *
 * @FieldWidget(
 *     id="socialmedia_twitter_widget",
 *     label=@Translation("Widget Reseux Sociaux"),
 *     field_types={"socialmedia_twitter"}
 * )
 */
class SocialMediaTwitterWidget extends WidgetBase
{
    public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state)
    {
        $element['twitter'] = [
            '#type' => 'textfield',
            '#default_value' => isset($items[$delta]->twitter) ? $items[$delta]->twitter : NULL,
            '#title' => t('Twitter'),
            '#size' => 50
        ];
        return $element;
    }
}
