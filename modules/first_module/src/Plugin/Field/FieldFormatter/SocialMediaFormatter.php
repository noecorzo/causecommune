<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 13-03-18
 * Time: 11:48
 */

namespace Drupal\first_module\Plugin\Field\FieldFormatter;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldFormatter;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;

/**
 * Class SocialMediaFormatter
 * @package Drupal\first_module\Plugin\Field\FieldFormatter
 *
 * @FieldFormatter(
 *     id="socialmedia_formatter",
 *     label=@Translation("Affichage Reseux Sociaux"),
 *     field_types={"socialmedia"}
 * )
 */

class SocialMediaFormatter extends FormatterBase
{

    public function viewElements(FieldItemListInterface $items, $langcode)
    {
        $element = [];
        foreach ($items as $delta => $item) {
            $element[$delta] = [
                '#markup' => $item->facebook
            ];
        }
        return $element;
    }
}