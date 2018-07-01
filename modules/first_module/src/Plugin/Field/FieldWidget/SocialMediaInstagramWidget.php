<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 14-03-18
 * Time: 15:17
 */

namespace Drupal\first_module\Plugin\Field\FieldWidget;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldWidget;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class SocialMediaInstagramWidget
 * @package Drupal\first_module\Plugin\Field\FieldWidget
 *
 * @FieldWidget(
 *     id="socialmedia_instagram_widget",
 *     label=@Translation("Widget Reseux Sociaux"),
 *     field_types={"socialmedia_instagram"}
 * )
 */


class SocialMediaInstagramWidget extends WidgetBase
{
    public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state)
    {
        $element['instagram'] = [
            '#type' => 'textfield',
            '#default_value' => isset($items[$delta]->instagram) ? $items[$delta]->instagram : NULL,
            '#title' => t('Instagram'),
            '#size' => 50
        ];
        return $element;
    }
}