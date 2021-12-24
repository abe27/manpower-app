<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSquizeDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('squize_details', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('squize_id');
            $table->string('title');
            $table->longText('description')->nullable();
            $table->string('image')->nullable();
            $table->decimal('score', 8, 2)->nullable()->default(0);
            $table->boolean('is_answer')->nullable()->default(false);
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('squize_id')->references('id')->on('squizes')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('squize_details');
    }
}
