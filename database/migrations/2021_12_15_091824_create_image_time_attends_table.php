<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImageTimeAttendsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('image_time_attends', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('attend_id');
            $table->string('files');
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('attend_id')->references('id')->on('time_attends')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('image_time_attends');
    }
}
