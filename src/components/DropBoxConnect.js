import React from "react";
import Button from "react-bootstrap/Button";
import { useDropboxChooser } from "use-dropbox-chooser";
const DROPBOX_APP_KEY = process.env.REACT_APP_DROPBOX_API_KEY;

function DropBoxConnect() {
  const { open, isOpen } = useDropboxChooser({
    appKey: DROPBOX_APP_KEY,
    chooserOptions: { multiple: true, linkType: "direct" },
  });

  return (
    <Button
      variant="primary"
      size="lg"
      className="font"
      onClick={async () => {
        try {
          const files = await open();
          console.log(files);
        } catch (e) {
          // if closed: e === undefined
        }
      }}
      disabled={isOpen}>
      Choose from Dropbox
    </Button>
  );
}

export default DropBoxConnect;
