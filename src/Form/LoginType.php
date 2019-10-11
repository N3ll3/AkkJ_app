<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class LoginType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder

            ->add('_username', null, ['label' => 'Email'])
            ->add(
                '_password',
                PasswordType::class,
                ['label' => 'Enter your password']
            )
            ->add(
                'ok',
                SubmitType::class,
                [
                    'label' => 'Ok',
                    'attr' => [
                        'class' => 'btn-primary btn-block'
                    ]
                ]
            );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
