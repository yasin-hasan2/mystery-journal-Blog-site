"use client";
import { FormEvent, startTransition, useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { createArticle } from "@/actions/create-article";
import Loader from "../anim/loader/loader";
import categoriesData from "@/data/categories.json";
import "react-quill-new/dist/quill.snow.css";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const CreateArticlePage = () => {
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState<string>("");

  const [formState, action, isPending] = useActionState(createArticle, {
    errors: {},
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // ✅ Upload the file first
    const file = formData.get("featuredImage") as File | null;
    let imageUrl = "";

    if (file && file.size > 0) {
      const uploadForm = new FormData();
      uploadForm.append("file", file);

      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: uploadForm,
      });

      if (!res.ok) {
        console.error("Image upload failed");
        return;
      }

      const { url } = await res.json();
      imageUrl = url;
    }

    // ✅ Replace file with Cloudinary URL
    formData.delete("featuredImage");
    formData.append("featuredImage", imageUrl);
    formData.set("content", content);

    // ✅ Call server action
    startTransition(() => {
      action(formData);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Article Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter article title"
              />
              {formState.errors.title && (
                <span className="text-sm text-red-500">
                  {formState.errors.title}
                </span>
              )}
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-black"
              >
                <option value="">Select Category</option>
                {categoriesData.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {formState.errors.category && (
                <span className="text-sm text-red-500">
                  {formState.errors.category}
                </span>
              )}
            </div>

            {/* /* Featured Image */}
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image</Label>
              <Input
                id="featuredImage"
                name="featuredImage"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    setPreview(previewUrl);
                  } else {
                    setPreview("");
                  }
                }}
              />
              {formState.errors.featuredImage && (
                <span className="text-sm text-red-500">
                  {formState.errors.featuredImage}
                </span>
              )}

              {/* Image Preview */}
              {preview && (
                <div className="mt-2">
                  <Image
                    src={preview}
                    alt="Preview"
                    className=" rounded-md border object-cover"
                    width={200}
                    height={100}
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label>Content</Label>
              <ReactQuill theme="snow" value={content} onChange={setContent} />
              {formState.errors.content && (
                <span className="text-sm text-red-500">
                  {formState.errors.content[0]}
                </span>
              )}
            </div>

            {/* General Errors */}
            {formState.errors.formErrors && (
              <div className="bg-red-100 p-2 border border-red-600">
                <span className="text-sm text-red-500">
                  {formState.errors.formErrors}
                </span>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button disabled={isPending} type="submit">
                {isPending ? <Loader /> : "Publish Article"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateArticlePage;
