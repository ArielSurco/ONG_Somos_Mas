import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const InputEditor = ({ news, setNews }) => {
  return (
    <div>
      <label htmlFor="content">Content</label>
      <CKEditor
        editor={ClassicEditor}
        data={news.content || ""}
        required={true}
        onChange={(event, editor) => {
          const data = editor.getData();
          const newsData = data.replace(/<[^>]*>/g, "");
          setNews({ ...news, content: newsData });
        }}
      />
    </div>
  );
};

export default InputEditor;
