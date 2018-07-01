<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 14-03-18
 * Time: 15:35
 */

namespace Drupal\first_module\Plugin\Field\FieldWidget;


use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldWidget;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class EmailWidget
 * @package Drupal\first_module\Plugin\Field\FieldWidget
 *
 * @FieldWidget(
 *     id="email_address_widget",
 *     label=@Translation("Email Address"),
 *     field_types={"email_address"}
 * )
 */

class EmailWidget extends WidgetBase
{
    public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state)
    {
        $element['email'] = [
            '#type' => 'textfield',
            '#default_value' => isset($items[$delta]->email) ? $items[$delta]->email : NULL,
            '#title' => t('Email'),
            '#size' => 50
        ];
        return $element;
    }
}