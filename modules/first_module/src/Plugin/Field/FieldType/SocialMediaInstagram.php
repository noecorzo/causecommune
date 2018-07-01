<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 13-03-18
 * Time: 11:14
 */

namespace Drupal\first_module\Plugin\Field\FieldType;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldType;
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;

/**
 * Class SocialMedia
 * @package Drupal\first_module\Plugin\Field\FieldType
 *
 * @FieldType(
 *     id="socialmedia_instagram",
 *     label=@Translation("Instagram"),
 *     description=@Translation("Champ de reseux sociaux"),
 *     category=@Translation("Reseux Sociaux"),
 *     default_widget="socialmedia_instagram_widget",
 *     default_formatter="socialmedia_instagram_formatter"
 * )
 */

class SocialMediaInstagram extends FieldItemBase
{

    public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition)
    {
        $properties = [];
        $properties['instagram'] = \Drupal\Core\TypedData\DataDefinition::create('string')
            ->setDescription(t('An instagram link'))
            ->setLabel(t('Instagram link'));
        return $properties;
    }

    public static function schema(FieldStorageDefinitionInterface $field_definition)
    {
        return [
            'columns' => [
                'instagram' => [
                    'description' => 'Instagram link',
                    'type' => 'varchar',
                    'length' => '255',
                    'not null' => TRUE,
                    'default' => ''
                ]
            ]
        ];
    }
}