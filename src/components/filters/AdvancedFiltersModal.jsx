import { useTranslation } from 'react-i18next'

export default function AdvancedFiltersModal({ open, onClose }){
  const { t } = useTranslation()
  if (!open) return null
  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <h3>{t('modal.advancedTitle')}</h3>
          <button className="btn btn-icon" onClick={onClose} aria-label={t('modal.close')}>✕</button>
        </div>
        <div className="modal-body">
          {/* esqueleto sem filtros por enquanto */}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>{t('modal.close')}</button>
        </div>
      </div>
    </div>
  )
}


