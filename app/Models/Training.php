<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Training extends Model
{
    use HasFactory, Uuids, Notifiable, HasApiTokens;

    protected $fillable = [
        'room_id',
        'topic_id',
        'on_date',
        'from_time',
        'to_time',
        'trainer_id',
        'descriptions',
        'is_complete',
        'is_status',
    ];
}
