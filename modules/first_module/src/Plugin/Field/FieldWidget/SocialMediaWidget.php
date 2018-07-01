<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 13-03-18
 * Time: 11:35
 */

namespace Drupal\first_module\Plugin\Field\FieldWidget;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldWidget;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class SocialMediaWidget
 * @package Drupal\first_module\Plugin\Field\FieldWidget
 *
 * @FieldWidget(
 *     id="socialmedia_widget",
 *     label=@Translation("Widget Reseux Sociaux"),
 *     field_types={"socialmedia"}
 * )
 */

class SocialMediaWidget extends WidgetBase
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