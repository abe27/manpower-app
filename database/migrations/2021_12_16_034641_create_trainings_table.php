<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrainingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trainings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('room_id');
            $table->uuid('topic_id');
            $table->date('on_date');
            $table->time('from_time');
            $table->time('to_time');
            $table->uuid('trainer_id');
            $table->longText('descriptions')->nullable();
            $table->enum('is_complete', ['N', 'Y'])->nullable()->default('N');
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('room_id')->references('id')->on('training_rooms')->cascadeOnDelete();
            $table->foreign('trainer_id')->references('id')->on('trainers')->cascadeOnDelete();
            $table->foreign('topic_id')->references('id')->on('training_topics')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trainings');
    }
}
