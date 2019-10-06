<?php

namespace App\Form;

use App\Entity\Bgame;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use App\Entity\Category;
use App\Entity\Difficulty;
use App\Entity\Mechanism;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Validator\Constraints\File;

class AddBgameFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('image_bgg', HiddenType::class, ['required'  => false])
            ->add(
                'image_perso',
                FileType::class,
                [
                    'required'  => false,
                    'mapped' => false,
                    'constraints' => [
                        new File([
                            'maxSize' => '1024k',
                            'mimeTypes' => [
                                'image/png',
                                'image/jpeg'
                            ],
                            'mimeTypesMessage' => 'Please upload a valid extension image',
                        ])

                    ]
                ]
            )
            ->add('description', CKEditorType::class, [
                'config_name' => 'basic_config',
                'required'  => false
            ])
            ->add('duration',  IntegerType::class)
            ->add(
                'minNbPlayers',
                NumberType::class,
                [
                    'html5' => true,
                ]
            )
            ->add(
                'maxNbPlayers',
                NumberType::class,
                [
                    'html5' => true,
                ]
            )
            ->add(
                'difficulty',
                EntityType::class,
                [
                    'class' => Difficulty::class,
                    'choice_label' => 'name',
                ]
            )

            ->add(
                'mechanism',
                EntityType::class,
                [
                    'class' => Mechanism::class,
                    'choice_label' => 'name',
                    'multiple' => true,
                    'expanded' => true,
                ]
            )
            ->add(
                'category',
                EntityType::class,
                [
                    'class' => Category::class,
                    'choice_label' => 'name',
                    'multiple' => true,
                    'expanded' => true,
                ]
            );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Bgame::class,
        ]);
    }
}
