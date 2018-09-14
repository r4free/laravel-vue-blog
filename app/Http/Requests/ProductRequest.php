<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name'=>"required|unique:products,name,{$this->id},id",
            'category_id'=>'required|exists:categories,id',
            'image'=>'image'
        ];
        return $rules;
    }
    public function messages(){
        return [
            'image.image'=>'O produdo deve conter uma imagem'
        ];
    }
}
