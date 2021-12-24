<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('leader_id');//ผจก./ผู้รับผิดชอบ
            $table->uuid('position_id');
            $table->uuid('department_id');
            $table->string('title')->unique();
            $table->longText('description')->nullable();
            $table->boolean('approve_leave')->nullable()->default(false);
            $table->boolean('approve_overtime')->nullable()->default(false);
            $table->boolean('approve_accident')->nullable()->default(false);
            $table->boolean('is_assessor')->nullable()->default(false);
            $table->string('mail_to');
            $table->string('mail_cc')->nullable();
            $table->string('mail_bc')->nullable();
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('leader_id')->references('id')->on('profiles')->cascadeOnDelete();
            $table->foreign('position_id')->references('id')->on('positions')->cascadeOnDelete();
            $table->foreign('department_id')->references('id')->on('departments')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organizations');
    }
}
