<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 13-03-18
 * Time: 14:57
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
 *     id="socialmedia_twitter_formatter",
 *     label=@Translation("Affichage Reseux Sociaux"),
 *     field_types={"socialmedia_twitter"}
 * )
 */


class SocialMediaTwitterFormatter  extends FormatterBase
{

    public function viewElements(FieldItemListInterface $items, $langcode)
    {
        $element = [];
        foreach ($items as $delta => $item) {
            $element[$delta] = [
                '#markup' => $item->twitter
            ];
        }
        return $element;
    }
}
