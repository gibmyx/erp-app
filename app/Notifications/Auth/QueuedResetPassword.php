<?php

namespace App\Notifications\Auth;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Lang;

class QueuedResetPassword extends Notification implements ShouldQueue
{
    use Queueable;

    private string $url;

    public function __construct(string $url)
    {
        $this->url = $url;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->view('auth.reset-password', [
                'url' => $this->url
            ]);
    }

    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
