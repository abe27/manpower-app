<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class TrainingRoom extends Model
{
    use HasFactory, Uuids, Notifiable, HasApiTokens;

    protected $fillable = [
        'title',
        'description',
        'image',
        'total_per_room',
        'is_idle',
        'is_status',
    ];
}
