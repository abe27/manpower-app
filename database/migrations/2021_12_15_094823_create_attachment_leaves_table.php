<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttachmentLeavesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attachment_leaves', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('leave_id');
            $table->string('files');
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('leave_id')->references('id')->on('leaves')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attachment_leaves');
    }
}
