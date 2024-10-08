
// ParentComponent.js
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import ViewMedicalHistory from './ViewMedicalHistory';

const ParentComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log('Close button clicked'); // Debugging line
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>View Medical History</Button>
      <ViewMedicalHistory open={open} onClose={handleClose} />
    </div>
  );
};

export default ParentComponent;
