<?php

namespace App\Form;

use App\Entity\Bgame;
use App\Entity\Filter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use App\Entity\Category;
use App\Entity\Difficulty;
use App\Entity\Mechanism;
use App\Repository\BgameRepository;
use Doctrine\ORM\EntityRepository;

class FilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'maxDuration',
                IntegerType::class,
                [
                    'required' => false,
                    'label' => false,
                    'attr' => [
                        'placeholder' => 'How much time?'
                    ]
                ]
            )

            ->add(
                'nbPlayers',
                IntegerType::class,
                [
                    'required' => false,
                    'label' => false,
                    'attr' => [
                        'placeholder' => 'How many are you?'
                    ]
                ]
            )
            ->add(
                'difficulty',
                EntityType::class,
                [
                    'class' => Difficulty::class,
                    'placeholder' => 'Choose a difficulty',
                    'choice_label' => 'name',
                    'required' => false
                ]

            )

            ->add(
                'mechanism',
                EntityType::class,
                [
                    'class' => Mechanism::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('m')
                            ->innerJoin('m.bgames', 'b')
                            ->orderBy('m.name', 'ASC');
                    },
                    'placeholder' => 'Choose a mechanism',
                    'choice_label' => 'name',
                    'multiple' => false,
                    'expanded' => false,
                    'required' => false
                ]
            )
            ->add(
                'category',
                EntityType::class,
                [
                    'class' => Category::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('c')
                            ->innerJoin('c.bgames', 'b')
                            ->orderBy('c.name', 'ASC');
                    },
                    'placeholder' => 'Choose a category',
                    'choice_label' => 'name',
                    'multiple' => false,
                    'expanded' => false,
                    'required' => false
                ]
            );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Filter::class,
            'method' => 'get',
            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
