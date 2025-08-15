export default function ReportModal({ open, onClose }){
  if (!open) return null
  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <h3>Denunciar</h3>
          <button className="btn btn-icon" onClick={onClose} aria-label="Fechar">✕</button>
        </div>
        <div className="modal-body">
          <label className="filters-label" htmlFor="reason">Motivo</label>
          <textarea id="reason" className="form-control" rows={4} placeholder="Descreva rapidamente o problema" />
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Fechar</button>
          <button className="btn btn-primary" onClick={onClose}>Enviar</button>
        </div>
      </div>
    </div>
  )
}


