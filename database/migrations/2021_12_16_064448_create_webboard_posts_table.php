<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebboardPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('webboard_posts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('category_id');
            $table->uuid('created_by');
            $table->string('title');
            $table->longText('description');
            $table->integer('total_views')->nullable()->default(0);
            $table->integer('total_like')->nullable()->default(0);
            $table->integer('total_dislike')->nullable()->default(0);
            $table->boolean('published')->nullable()->default(false);
            $table->dateTime('published_at');
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('category_id')->references('id')->on('categories')->cascadeOnDelete();
            $table->foreign('created_by')->references('id')->on('profiles')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('webboard_posts');
    }
}
