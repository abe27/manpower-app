<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class WebboardPost extends Model
{
    use HasFactory, Uuids, Notifiable, HasApiTokens;

    protected $fillable = [
        'category_id',
        'created_by',
        'title',
        'description',
        'total_views',
        'total_like',
        'total_dislike',
        'published',
        'published_at',
        'is_status',
    ];
}
