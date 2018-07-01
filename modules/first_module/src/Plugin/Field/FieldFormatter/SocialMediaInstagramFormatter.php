<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 14-03-18
 * Time: 15:21
 */

namespace Drupal\first_module\Plugin\Field\FieldFormatter;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldFormatter;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;

/**
 * Class SocialMediaInstagramFormatter
 * @package Drupal\first_module\Plugin\Field\FieldFormatter
 *
 * @FieldFormatter(
 *     id="socialmedia_instagram_formatter",
 *     label=@Translation("Affichage Reseux Sociaux"),
 *     field_types={"socialmedia_instagram"}
 * )
 */

class SocialMediaInstagramFormatter extends FormatterBase
{
    public function viewElements(FieldItemListInterface $items, $langcode)
    {
        $element = [];
        foreach ($items as $delta => $item) {
            $element[$delta] = [
                '#markup' => $item->instagram
            ];
        }
        return $element;
    }
}