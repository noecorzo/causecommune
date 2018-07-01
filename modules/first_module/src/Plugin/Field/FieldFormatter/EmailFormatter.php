<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 14-03-18
 * Time: 15:38
 */

namespace Drupal\first_module\Plugin\Field\FieldFormatter;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldFormatter;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;

/**
 * Class EmailFormatter
 * @package Drupal\first_module\Plugin\Field\FieldFormatter
 *
 * @FieldFormatter(
 *     id="email_address_formatter",
 *     label=@Translation("Email Address"),
 *     field_types={"email_address"}
 * )
 */

class EmailFormatter extends FormatterBase
{
    public function viewElements(FieldItemListInterface $items, $langcode)
    {
        $element = [];
        foreach ($items as $delta => $item) {
            $element[$delta] = [
                '#markup' => $item->email
            ];
        }
        return $element;
    }
}