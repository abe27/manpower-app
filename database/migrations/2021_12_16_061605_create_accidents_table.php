<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccidentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accidents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('whs_id');
            $table->uuid('emp_id');
            $table->uuid('accident_type');
            $table->string('subject');
            $table->date('on_date');
            $table->time('on_time');
            $table->longText('description')->nullable();
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('whs_id')->references('id')->on('whs')->cascadeOnDelete();
            $table->foreign('emp_id')->references('id')->on('profiles')->cascadeOnDelete();
            $table->foreign('accident_type')->references('id')->on('accident_groups')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accidents');
    }
}
