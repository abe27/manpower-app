<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Trainer extends Model
{
    use HasFactory, Uuids, Notifiable, HasApiTokens;

    protected $fillable = [
        'name',
        'company',
        'position_id',
        'email',
        'telno',
        'mobileno',
        'avatar',
        'descriptions',
        'is_status',
    ];
}
