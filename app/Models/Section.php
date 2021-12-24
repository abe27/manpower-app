<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Section extends Model
{
    use HasFactory, Uuids, Notifiable, HasApiTokens;

    protected $fillable = [
        'title',
        'description',
        'is_status',
    ];
}
