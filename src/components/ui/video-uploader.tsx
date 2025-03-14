"use client";

import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useState } from "react";

interface VideoUploaderProps {
  
  value?: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ value, onChange, error }) => {
  const [video, setVideo] = useState<File | null>(value || null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(file);
      onChange(file);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setVideo(file);
      onChange(file);
    }
  };

  return (
    <div className="space-y-2">
      
      <div
        className={`rounded-lg border-2 border-dashed p-4 text-center transition-colors hover:bg-accent/50 ${
          video ? "border-primary" : "border-muted-foreground/25"
        }`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        style={{ height: "160px" }}
      >
        {video ? (
          <div className="relative">
            <video
              src={URL.createObjectURL(video)}
              className="mx-auto max-h-32 rounded"
              controls
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute -right-2 -top-2"
              onClick={() => {
                setVideo(null);
                onChange(null);
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <Upload className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
            <p className="mb-1 text-sm text-muted-foreground">
              Drag and drop a video here or
            </p>
            <label className="cursor-pointer text-sm text-primary hover:underline">
              Click to Upload
              <input
                type="file"
                className="hidden"
                accept="video/mp4"
                onChange={handleFileSelect}
              />
            </label>
          </>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default VideoUploader;
