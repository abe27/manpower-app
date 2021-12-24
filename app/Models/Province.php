<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Province extends Model
{
    use HasFactory, Uuids, Notifiable, HasApiTokens;

    protected $fillable = [
        'code',
        'province',
        'description',
        'latitude',
        'longitude',
        'is_status',
    ];
}
