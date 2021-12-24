<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Organization extends Model
{
    use HasFactory, Uuids, Notifiable, HasApiTokens;

    protected $fillable = [
        'leader_id',
        'position_id',
        'department_id',
        'title',
        'description',
        'approve_leave',
        'approve_overtime',
        'approve_accident',
        'is_assessor',
        'mail_to',
        'mail_cc',
        'mail_bc',
        'is_status',
    ];
}
