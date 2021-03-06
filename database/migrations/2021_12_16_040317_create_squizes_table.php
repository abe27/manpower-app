<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSquizesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('squizes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('training_id');
            $table->string('title');
            $table->longText('description')->nullable();
            $table->decimal('full_score', 8, 2)->nullable()->default(0);
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('training_id')->references('id')->on('training_topics')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('squizes');
    }
}
