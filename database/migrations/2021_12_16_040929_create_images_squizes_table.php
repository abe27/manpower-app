<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesSquizesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images_squizes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('squize_id');
            $table->string('files');
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
        Schema::dropIfExists('images_squizes');
    }
}
