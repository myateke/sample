<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Retlations\BelongsTo
     */
    public function user()
    {
      return $this->belongsTo(User::class);
    }
}
