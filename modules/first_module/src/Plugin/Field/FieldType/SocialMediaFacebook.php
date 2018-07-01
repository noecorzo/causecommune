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
 *     id="socialmedia_facebook",
 *     label=@Translation("Facebook"),
 *     description=@Translation("Champ de reseux sociaux"),
 *     category=@Translation("Reseux Sociaux"),
 *     default_widget="socialmedia_facebook_widget",
 *     default_formatter="socialmedia_facebook_formatter"
 * )
 */

class SocialMediaFacebook extends FieldItemBase
{

    public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition)
    {
        $properties = [];
        $properties['facebook'] = \Drupal\Core\TypedData\DataDefinition::create('string')
            ->setDescription(t('A facebook link'))
            ->setLabel(t('Facebook link'));
        return $properties;
    }

    public static function schema(FieldStorageDefinitionInterface $field_definition)
    {
        return [
            'columns' => [
                'facebook' => [
                    'description' => 'Facebook link',
                    'type' => 'varchar',
                    'length' => '255',
                    'not null' => TRUE,
                    'default' => ''
                ]
            ]
        ];
    }
}