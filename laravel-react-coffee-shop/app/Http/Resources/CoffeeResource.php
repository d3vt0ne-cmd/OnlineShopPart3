<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CoffeeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->base_price,
            'size' => new SizeCoffeeResource($this->whenLoaded('size')),
            'image' => $this->image,
            'available' => $this->available,
        ];
    }
}