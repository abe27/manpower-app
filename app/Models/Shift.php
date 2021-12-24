<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Shift extends Model
{
    use HasFactory, Uuids, Notifiable, HasApiTokens;

    protected $fillable = [
        'title',
        'description',
        'time_attendance',
        'fee_per',
        'is_status',
    ];
}
