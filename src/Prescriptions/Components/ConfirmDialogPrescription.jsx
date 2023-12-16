import React from 'react'
import { ConfirmDialog } from 'primereact/confirmdialog';
export const ConfirmDialogPrescription = ({ visible, onHide, prescription, handleClickAccept, handleClickReject }) => {
  return (

    <ConfirmDialog
      visible={visible}
      onHide={() => onHide()}
      message={`¿Seguro de ${prescription?.status?.code===1 ? 'anular' : 'activar'} la receta? ${prescription?._id}`}
      header="Confirmación"
      icon="pi pi-exclamation-triangle"
      accept={handleClickAccept}
      reject={handleClickReject}
    />

  )
}
