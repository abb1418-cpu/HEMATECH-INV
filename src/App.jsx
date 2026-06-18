import React, { useState, useEffect, useMemo } from 'react';
import { 
  Plus, Trash2, Download, Save, Search, FileText, LayoutDashboard, 
  CheckCircle, Clock, AlertCircle, XCircle, Copy, ChevronRight,
  User, Hash, Edit3, RefreshCw
} from 'lucide-react';

const HEMAH_LOGO = "data:image/webp;base64,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";
const MAWARID_LOGO = "data:image/webp;base64,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";

const SUPABASE_URL = 'https://awrqvnokxzfbrjeywxns.supabase.co';
const SUPABASE_KEY = 'sb_publishable_UHaKzgBXB48gfg_7twANXQ_qa_qaxVD';

const supabaseHeaders = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json'
};

const PRIMARY_DARK = '#131A23';
const PRIMARY_ORANGE = '#DD4726';
const PARENT_GOLD = '#D4AF37';
const VAT_RATE = 0.15;

const STATUS_COLORS = {
  Paid: 'bg-green-100 text-green-800 border-green-200',
  Unpaid: 'bg-orange-100 text-orange-800 border-orange-200',
  Draft: 'bg-gray-100 text-gray-800 border-gray-200',
  Overdue: 'bg-red-100 text-red-800 border-red-200',
  Cancelled: 'bg-black text-white border-gray-500',
};

function calculateInvoice(invoice) {
  const items = invoice.items || [];
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalDiscount = items.reduce((acc, item) => acc + (item.discount || 0), 0);
  const taxableAmount = Math.max(0, subtotal - totalDiscount);
  const taxAmount = taxableAmount * VAT_RATE;
  const grandTotal = taxableAmount + taxAmount;
  return { subtotal, totalDiscount, taxableAmount, taxAmount, grandTotal };
}

function generateInvoicePDF(invoice) {
  const totals = calculateInvoice(invoice);
  const statusColors = { Paid: '#166534', Unpaid: '#9a3412', Draft: '#374151', Overdue: '#991b1b', Cancelled: '#fff' };
  const statusBg = { Paid: '#dcfce7', Unpaid: '#ffedd5', Draft: '#f3f4f6', Overdue: '#fee2e2', Cancelled: '#000' };

  const itemsHTML = (invoice.items || []).map((item, i) => `
    <tr style="background:${i % 2 === 0 ? '#fff' : '#f9fafb'}">
      <td style="padding:10px 16px;text-align:right;font-size:13px;color:#374151;border-bottom:1px solid #e5e7eb">${item.description}</td>
      <td style="padding:10px 8px;text-align:center;font-size:13px;color:#6b7280;border-bottom:1px solid #e5e7eb">${item.quantity}</td>
      <td style="padding:10px 8px;text-align:center;font-size:13px;color:#6b7280;border-bottom:1px solid #e5e7eb">${item.price.toFixed(2)}</td>
      <td style="padding:10px 8px;text-align:center;font-size:13px;color:#ef4444;border-bottom:1px solid #e5e7eb">${item.discount > 0 ? '-'+item.discount.toFixed(2) : '0.00'}</td>
      <td style="padding:10px 16px;text-align:center;font-size:13px;font-weight:700;color:#131A23;border-bottom:1px solid #e5e7eb">${((item.price * item.quantity) - item.discount).toFixed(2)}</td>
      <td style="padding:10px 8px;text-align:center;font-size:13px;font-weight:700;color:#DD4726;border-bottom:1px solid #e5e7eb">${(((item.price * item.quantity) - item.discount) * 1.15).toFixed(2)}</td>
    </tr>`).join('');

  const workOrdersHTML = (invoice.workOrders || []).length > 0 ? `
    <div style="margin-bottom:12px">
      <div style="font-size:10px;font-weight:700;color:#9ca3af;text-transform:uppercase;margin-bottom:6px">أوامر العمل المرتبطة</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${invoice.workOrders.map(wo => `<span style="background:#eff6ff;color:#1d4ed8;padding:2px 8px;border-radius:4px;font-size:10px;font-family:monospace;border:1px solid #bfdbfe">${wo}</span>`).join('')}</div>
    </div>` : '';

  const html = `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="UTF-8">
  <title>فاتورة ${invoice.id} - همة تك</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:system-ui,-apple-system,sans-serif;direction:rtl;background:#fff;color:#131A23}
    @page{size:A4;margin:1.5cm}
    @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
    table{border-collapse:collapse;width:100%}
  </style>
</head>
<body>
  <div style="border-bottom:4px solid #131A23;padding:32px;display:flex;justify-content:space-between;align-items:flex-start">
    <div><img src="${HEMAH_LOGO}" alt="Hemah Tech" style="height:64px;object-fit:contain"></div>
    <div style="text-align:right">
      <img src="${MAWARID_LOGO}" alt="Al Mawarid" style="height:48px;object-fit:contain;margin-bottom:10px">
      <div style="background:#f3f4f6;padding:8px 16px;border-radius:4px;font-size:18px;font-weight:900;letter-spacing:2px">INVOICE فاتورة</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid #e5e7eb">
    <div style="padding:24px;border-left:1px solid #e5e7eb">
      <div style="font-size:10px;font-weight:900;color:#9ca3af;text-transform:uppercase;margin-bottom:12px;padding-bottom:4px;border-bottom:1px solid #e5e7eb">الجهة المصدرة (Issuer)</div>
      <div style="font-size:13px;line-height:1.8">
        <div style="font-weight:700">${invoice.issuer?.parentName || '-'}</div>
        <div style="color:#6b7280">الرقم الضريبي: ${invoice.issuer?.vatNo || '-'}</div>
      </div>
    </div>
    <div style="padding:24px;background:#f9fafb">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="font-size:10px;font-weight:900;color:#9ca3af;text-transform:uppercase">بيانات الفاتورة</div>
        <span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;border:1px solid;color:${statusColors[invoice.status]};background:${statusBg[invoice.status]}">${invoice.status}</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px">
        <div><div style="font-size:9px;color:#9ca3af;font-weight:700;text-transform:uppercase">رقم الفاتورة</div><div style="font-weight:700;font-family:monospace">#${invoice.id}</div></div>
        <div><div style="font-size:9px;color:#9ca3af;font-weight:700;text-transform:uppercase">تاريخ الإصدار</div><div style="font-weight:700">${invoice.date}</div></div>
        <div><div style="font-size:9px;color:#9ca3af;font-weight:700;text-transform:uppercase">العميل</div><div style="font-weight:700">${invoice.customer?.name || '-'}</div></div>
        <div><div style="font-size:9px;color:#9ca3af;font-weight:700;text-transform:uppercase">تاريخ التنفيذ</div><div style="font-weight:700">${invoice.dueDate || invoice.date}</div></div>
      </div>
    </div>
  </div>
  <div style="background:#131A23;color:#fff;padding:10px 24px;display:flex;justify-content:space-between;font-size:11px">
    <div>العنوان: ${invoice.customer?.address || '-'} | الجوال: ${invoice.customer?.phone || '-'}</div>
    <div style="font-weight:700">الموقع: ${invoice.customer?.city || '-'}</div>
  </div>
  <table>
    <thead>
      <tr style="background:#f3f4f6">
        <th style="padding:12px 16px;text-align:right;font-size:11px;font-weight:700;border-bottom:1px solid #e5e7eb">الوصف / Description</th>
        <th style="padding:12px 8px;text-align:center;font-size:11px;font-weight:700;border-bottom:1px solid #e5e7eb;width:60px">الكمية</th>
        <th style="padding:12px 8px;text-align:center;font-size:11px;font-weight:700;border-bottom:1px solid #e5e7eb;width:80px">سعر الوحدة</th>
        <th style="padding:12px 8px;text-align:center;font-size:11px;font-weight:700;border-bottom:1px solid #e5e7eb;width:70px">الخصم</th>
        <th style="padding:12px 16px;text-align:center;font-size:11px;font-weight:700;border-bottom:1px solid #e5e7eb;width:90px">المجموع</th>
        <th style="padding:12px 8px;text-align:center;font-size:11px;font-weight:700;border-bottom:1px solid #e5e7eb;width:100px;color:#DD4726">السعر مع الضريبة</th>
      </tr>
    </thead>
    <tbody>${itemsHTML}</tbody>
  </table>
  <div style="display:flex;justify-content:space-between;padding:24px;background:#f9fafb;border-top:1px solid #e5e7eb">
    <div style="width:48%">
      ${workOrdersHTML}
      <div style="font-size:10px;font-weight:700;color:#9ca3af;text-transform:uppercase;margin-bottom:6px">ملاحظات</div>
      <div style="font-size:11px;color:#6b7280;line-height:1.7">${invoice.notes || ''}</div>
    </div>
    <div style="width:36%">
      <div style="display:flex;justify-content:space-between;padding:6px 0;font-size:12px;color:#6b7280"><span>المجموع الفرعي</span><span style="font-weight:600">${totals.subtotal.toFixed(2)}</span></div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;font-size:12px;color:#6b7280"><span>إجمالي الخصم</span><span style="font-weight:600;color:#ef4444">-${totals.totalDiscount.toFixed(2)}</span></div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;font-size:12px;color:#6b7280"><span>ضريبة القيمة المضافة (15%)</span><span style="font-weight:600">${totals.taxAmount.toFixed(2)}</span></div>
      <div style="display:flex;justify-content:space-between;padding:12px 0;margin-top:8px;border-top:2px solid #131A23;font-size:18px;font-weight:900">
        <span>الإجمالي النهائي</span>
        <span style="color:#DD4726">${totals.grandTotal.toFixed(2)} <span style="font-size:11px">ر.س</span></span>
      </div>
    </div>
  </div>
  <div style="padding:24px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center">
    <div style="width:48px;height:3px;background:#DD4726;border-radius:999px;margin:0 auto 12px"></div>
    <div style="font-size:13px;font-weight:700;margin-bottom:6px">صدرت هذه الفاتورة قانونياً عن شركة الموارد للقوى البشرية</div>
    <div style="font-size:10px;color:#9ca3af">همة تك هي مشروع تابع لشركة الموارد للقوى البشرية. جميع الحقوق محفوظة.</div>
  </div>
  <script>window.onload=()=>{window.print()}<\/script>
</body></html>`;

  const win = window.open('', '_blank', 'width=900,height=700');
  if (win) { win.document.write(html); win.document.close(); }
}

function Dashboard({ invoices, searchTerm, setSearchTerm, filterStatus, setFilterStatus, onEdit, onDelete, onDuplicate, onView }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إدارة الفواتير</h1>
          <p className="text-gray-500 mt-1">عرض وإدارة فواتير همة تك للصيانة المنزلية المتزامنة مع الخادم</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', 'Paid', 'Unpaid', 'Draft', 'Overdue'].map(status => (
            <button key={status} onClick={() => setFilterStatus(status)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${filterStatus === status ? 'bg-gray-900 text-white border-gray-900 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}>
              {status === 'All' ? 'الكل' : status}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="p-4 border-b bg-gray-50/50 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="البحث برقم الفاتورة أو اسم العميل..."
              className="w-full pr-10 pl-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">رقم الفاتورة</th>
                <th className="px-6 py-4">العميل</th>
                <th className="px-6 py-4">التاريخ</th>
                <th className="px-6 py-4">المبلغ الإجمالي</th>
                <th className="px-6 py-4 text-center">الحالة</th>
                <th className="px-6 py-4 text-left">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invoices.length > 0 ? invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4 font-mono text-sm font-bold text-gray-900">#{inv.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{inv.customer?.name || 'عميل غير معروف'}</span>
                      <span className="text-xs text-gray-400">{inv.customer?.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{inv.date}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">
                    {calculateInvoice(inv).grandTotal.toFixed(2)} <span className="text-[10px] text-gray-400">ر.س</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase ${STATUS_COLORS[inv.status] || STATUS_COLORS['Draft']}`}>{inv.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-start gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => onView(inv)} title="عرض" className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><FileText size={18} /></button>
                      <button onClick={() => generateInvoicePDF(inv)} title="حفظ كـ PDF" className="p-2 text-green-600 hover:bg-green-50 rounded-lg"><Download size={18} /></button>
                      <button onClick={() => onEdit(inv)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"><Edit3 size={18} /></button>
                      <button onClick={() => onDuplicate(inv)} className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg"><Copy size={18} /></button>
                      <button onClick={() => onDelete(inv.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6" className="px-6 py-16 text-center text-gray-400">
                    <div className="flex flex-col items-center gap-3">
                      <FileText size={48} className="opacity-20" />
                      <p>لا توجد فواتير مطابقة للبحث.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function InvoiceEditor({ invoice, onSave, onCancel, isSaving }) {
  const [formData, setFormData] = useState({
    ...invoice,
    customer: invoice.customer || { name: '', phone: '', address: '', city: 'الرياض' },
    items: invoice.items || [],
    workOrders: invoice.workOrders || [],
    issuer: invoice.issuer || {}
  });
  
  const totals = useMemo(() => calculateInvoice(formData), [formData]);

  const addItem = () => setFormData({ ...formData, items: [...formData.items, { id: Date.now(), description: '', quantity: 1, unit: 'ساعة', price: 0, discount: 0 }] });
  const removeItem = (id) => setFormData({ ...formData, items: formData.items.filter(i => i.id !== id) });
  const updateItem = (id, field, value) => setFormData({ ...formData, items: formData.items.map(item => item.id === id ? { ...item, [field]: value } : item) });

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onCancel} className="p-2 hover:bg-white border rounded-lg text-gray-500"><ChevronRight size={20} /></button>
          <div>
            <h2 className="text-xl font-bold text-gray-900">تحرير الفاتورة</h2>
            <p className="text-sm text-gray-500">رقم المرجع: {formData.id}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={onCancel} disabled={isSaving} className="px-6 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg disabled:opacity-50">إلغاء</button>
          <button onClick={() => onSave(formData)} disabled={isSaving} className="px-8 py-2 text-white font-bold rounded-lg shadow-lg flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" style={{ backgroundColor: PRIMARY_ORANGE }}>
            {isSaving ? <RefreshCw className="animate-spin" size={18} /> : <Save size={18} />}
            <span>{isSaving ? 'جاري الحفظ...' : 'حفظ الفاتورة'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-xl border shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-gray-900 border-b pb-4">
              <User size={20} className="text-orange-500" /><h3 className="font-bold">بيانات العميل</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500">اسم العميل</label>
                <input type="text" value={formData.customer.name}
                  onChange={(e) => setFormData({...formData, customer: {...formData.customer, name: e.target.value}})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                  placeholder="أدخل اسم العميل بالكامل" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500">رقم الجوال</label>
                <input type="text" value={formData.customer.phone}
                  onChange={(e) => setFormData({...formData, customer: {...formData.customer, phone: e.target.value}})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                  placeholder="05xxxxxxx" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-gray-500">العنوان</label>
                <input type="text" value={formData.customer.address}
                  onChange={(e) => setFormData({...formData, customer: {...formData.customer, address: e.target.value}})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                  placeholder="الحي، الشارع، رقم المنزل" />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="p-6 flex items-center justify-between border-b bg-gray-50/50">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-orange-500" /><h3 className="font-bold">بنود الفاتورة</h3>
              </div>
              <button onClick={addItem} className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                <Plus size={16} /><span>إضافة بند جديد</span>
              </button>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50 text-[10px] text-gray-400 uppercase font-bold">
                <tr>
                  <th className="px-6 py-3 text-right">الوصف</th>
                  <th className="px-4 py-3 text-center w-24">الكمية</th>
                  <th className="px-4 py-3 text-center w-24">السعر</th>
                  <th className="px-4 py-3 text-center w-24">خصم</th>
                  <th className="px-4 py-3 text-center w-32">المجموع</th>
                  <th className="px-4 py-3 text-center w-36 text-orange-500">السعر مع الضريبة</th>
                  <th className="px-4 py-3 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {formData.items.map((item) => (
                  <tr key={item.id} className="group">
                    <td className="px-6 py-4">
                      <textarea rows="1" value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        className="w-full bg-transparent border-none focus:ring-0 resize-none text-sm p-0 placeholder:text-gray-300"
                        placeholder="وصف الخدمة أو قطعة الغيار..." />
                    </td>
                    <td className="px-4 py-4">
                      <input type="number" value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', Number(e.target.value))}
                        className="w-full text-center bg-gray-50 py-1 rounded border-none focus:ring-1 focus:ring-orange-500 text-sm" />
                    </td>
                    <td className="px-4 py-4">
                      <input type="number" value={item.price}
                        onChange={(e) => updateItem(item.id, 'price', Number(e.target.value))}
                        className="w-full text-center bg-gray-50 py-1 rounded border-none focus:ring-1 focus:ring-orange-500 text-sm font-medium" />
                    </td>
                    <td className="px-4 py-4">
                      <input type="number" value={item.discount}
                        onChange={(e) => updateItem(item.id, 'discount', Number(e.target.value))}
                        className="w-full text-center bg-gray-50 py-1 rounded border-none focus:ring-1 focus:ring-orange-500 text-sm" />
                    </td>
                    <td className="px-4 py-4 text-center font-bold text-sm text-gray-900">
                      {((item.price * item.quantity) - item.discount).toFixed(2)}
                    </td>
                    <td className="px-4 py-4">
                      <input
                        key={`vat-${item.id}-${item.price}-${item.quantity}-${item.discount}`}
                        type="number"
                        defaultValue={parseFloat((((item.price * item.quantity) - item.discount) * 1.15).toFixed(2))}
                        onBlur={(e) => {
                          const vatTotal = Number(e.target.value);
                          if (!isNaN(vatTotal) && vatTotal >= 0) {
                            const netPrice = (vatTotal / 1.15) / Math.max(item.quantity, 1);
                            updateItem(item.id, 'price', Math.round(netPrice * 100) / 100);
                          }
                        }}
                        className="w-full text-center bg-orange-50 py-1 rounded border-none focus:ring-1 focus:ring-orange-500 text-sm font-bold text-orange-600"
                      />
                    </td>
                    <td className="px-4 py-4 text-left">
                      <button onClick={() => removeItem(item.id)} className="p-1 text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 bg-gray-50/30">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">إضافة سريعة</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'الصيانة الخفيفة - مكيف سبيلت','الصيانة الشاملة للسخان','تركيب حامل تلفزيون','تركيب فلتر مياه',
                  'تركيب لوحة أو مرآة','تعبئة فريون مكيف سبليت','تغيير أو تركيب القفل الذكي للأبواب',
                  'تغيير أو تركيب قفل الأبواب','تغيير أو تركيب مقبض الأبواب','صيانة دورة المياه الشاملة',
                  'غسيل وتنظيف مكيف سبليت - الوحدة الداخلية','غسيل وتنظيف مكيف سبليت - الوحدة الداخلية والمكينة الخارجية',
                  'فني تركيب الأثاث - نصف ساعة','فني تركيب الأثاث - ساعة','فني تركيب الأثاث - ساعتان',
                  'فني سباكة - نصف ساعة','فني سباكة - ساعة','فني سباكة - ساعتان',
                  'فني كهرباء - نصف ساعة','فني كهرباء - ساعة','فني كهرباء - ساعتان',
                ].map(label => (
                  <button key={label}
                    onClick={() => setFormData({ ...formData, items: [...formData.items, { id: Date.now(), description: label, quantity: 1, unit: 'خدمة', price: 0, discount: 0 }] })}
                    className="px-3 py-1.5 bg-white border text-xs text-gray-600 rounded-full hover:border-orange-500 hover:text-orange-600 transition-all">
                    + {label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b pb-4">
              <Clock size={20} className="text-orange-500" /><h3 className="font-bold">أوامر العمل (Work Orders)</h3>
            </div>
            <div className="flex gap-2 mb-4">
              <input id="wo_input" type="text" placeholder="أدخل رقم أمر العمل (مثال: WO-00045539)"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                onKeyDown={(e) => { if (e.key === 'Enter') { const val = e.target.value.trim(); if (val && !formData.workOrders.includes(val)) { setFormData({...formData, workOrders: [...formData.workOrders, val]}); e.target.value = ''; } }}} />
              <button onClick={() => { const el = document.getElementById('wo_input'); const val = el.value.trim(); if (val && !formData.workOrders.includes(val)) { setFormData({...formData, workOrders: [...formData.workOrders, val]}); el.value = ''; }}}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-bold">إضافة</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.workOrders.map(wo => (
                <span key={wo} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-mono flex items-center gap-2 border border-blue-100">
                  {wo}
                  <button onClick={() => setFormData({...formData, workOrders: formData.workOrders.filter(w => w !== wo)})}><XCircle size={14} /></button>
                </span>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle size={20} className="text-orange-500" /><h3 className="font-bold">ملاحظات وشروط</h3>
            </div>
            <textarea rows="4" value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none text-sm text-gray-600 leading-relaxed" />
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white p-6 rounded-xl border shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b pb-4">
              <Hash size={20} className="text-orange-500" /><h3 className="font-bold">تفاصيل الفاتورة</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400">رقم الفاتورة</label>
                <input type="text" value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})}
                  className="w-full px-3 py-1.5 rounded-md border text-sm font-mono" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400">حالة الفاتورة</label>
                <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-1.5 rounded-md border text-sm">
                  <option value="Draft">Draft (مسودة)</option>
                  <option value="Unpaid">Unpaid (غير مدفوعة)</option>
                  <option value="Paid">Paid (مدفوعة)</option>
                  <option value="Overdue">Overdue (متأخرة)</option>
                  <option value="Cancelled">Cancelled (ملغاة)</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400">تاريخ الإصدار</label>
                  <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-2 py-1.5 rounded-md border text-xs" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400">تاريخ التنفيذ</label>
                  <input type="date" value={formData.dueDate || formData.date} onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                    className="w-full px-2 py-1.5 rounded-md border text-xs" />
                </div>
              </div>
            </div>
          </section>

          <section className="p-6 rounded-xl shadow-xl text-white space-y-4" style={{ backgroundColor: PRIMARY_DARK }}>
            <h3 className="font-bold border-b border-white/10 pb-4">الملخص المالي</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>المجموع الفرعي</span><span>{totals.subtotal.toFixed(2)} ر.س</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>إجمالي الخصم</span><span>-{totals.totalDiscount.toFixed(2)} ر.س</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>ضريبة القيمة المضافة (15%)</span><span>{totals.taxAmount.toFixed(2)} ر.س</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between text-xl font-bold">
                <span style={{ color: PRIMARY_ORANGE }}>الإجمالي النهائي</span>
                <span>{totals.grandTotal.toFixed(2)} ر.س</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function InvoicePreview({ invoice, onBack, onEdit }) {
  const totals = useMemo(() => calculateInvoice(invoice), [invoice]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
          <ChevronRight size={20} /><span>العودة للقائمة</span>
        </button>
        <div className="flex gap-2">
          <button onClick={onEdit} className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-white transition-all flex items-center gap-2">
            <Edit3 size={18} /><span>تعديل</span>
          </button>
          <button onClick={() => generateInvoicePDF(invoice)} className="px-6 py-2 text-white font-bold rounded-lg flex items-center gap-2 shadow-sm" style={{ backgroundColor: '#16a34a' }}>
            <Download size={18} /><span>حفظ كـ PDF</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden">
        <div className="p-8 md:p-12 border-b-4" style={{ borderColor: PRIMARY_DARK }}>
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <img src={HEMAH_LOGO} alt="Hemah Tech" className="h-16 object-contain" />
            </div>
            <div className="flex flex-col items-end gap-3 text-right">
              <div className="flex items-center pr-4 border-r-2" style={{ borderColor: PARENT_GOLD }}>
                <img src={MAWARID_LOGO} alt="Al Mawarid" className="h-12 object-contain" />
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded">
                <h2 className="text-xl font-bold tracking-widest" style={{ color: PRIMARY_DARK }}>INVOICE فاتورة</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-0 border-b">
          <div className="p-8 border-l space-y-4">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b pb-1 inline-block">الجهة المصدرة (Issuer)</h3>
            <div className="text-sm space-y-1">
              <p className="font-bold" style={{ color: PRIMARY_DARK }}>{invoice.issuer?.parentName}</p>
              <p className="text-gray-500">الرقم الضريبي: {invoice.issuer?.vatNo}</p>
            </div>
          </div>
          <div className="p-8 space-y-4 bg-gray-50/30">
            <div className="flex justify-between items-start">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b pb-1 inline-block">بيانات الفاتورة (Invoice Details)</h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${STATUS_COLORS[invoice.status] || STATUS_COLORS['Draft']}`}>{invoice.status}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><p className="text-gray-400 text-[10px] font-bold uppercase">رقم الفاتورة</p><p className="font-mono font-bold" style={{ color: PRIMARY_DARK }}>#{invoice.id}</p></div>
              <div><p className="text-gray-400 text-[10px] font-bold uppercase">تاريخ الإصدار</p><p className="font-bold" style={{ color: PRIMARY_DARK }}>{invoice.date}</p></div>
              <div><p className="text-gray-400 text-[10px] font-bold uppercase">العميل</p><p className="font-bold" style={{ color: PRIMARY_DARK }}>{invoice.customer?.name}</p></div>
              <div><p className="text-gray-400 text-[10px] font-bold uppercase">تاريخ التنفيذ</p><p className="font-bold" style={{ color: PRIMARY_DARK }}>{invoice.dueDate || invoice.date}</p></div>
            </div>
          </div>
        </div>

        <div className="px-8 py-4 text-white flex justify-between items-center text-xs" style={{ backgroundColor: PRIMARY_DARK }}>
          <div className="flex gap-4">
            <span className="opacity-60">العنوان: {invoice.customer?.address}</span>
            <span className="opacity-60">|</span>
            <span className="opacity-60">الجوال: {invoice.customer?.phone}</span>
          </div>
          <div className="font-bold">الموقع: {invoice.customer?.city}</div>
        </div>

        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-gray-100 text-[11px] font-bold" style={{ color: PRIMARY_DARK }}>
              <th className="px-8 py-4 border-b">الوصف / Description</th>
              <th className="px-4 py-4 border-b text-center w-20">الكمية Qty</th>
              <th className="px-4 py-4 border-b text-center w-24">سعر الوحدة</th>
              <th className="px-4 py-4 border-b text-center w-20">الخصم</th>
              <th className="px-8 py-4 border-b text-center w-32">المجموع</th>
              <th className="px-4 py-4 border-b text-center w-36" style={{ color: PRIMARY_ORANGE }}>السعر مع الضريبة</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {(invoice.items || []).map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50">
                <td className="px-8 py-4 text-gray-700 leading-relaxed font-medium">{item.description}</td>
                <td className="px-4 py-4 text-center text-gray-500">{item.quantity}</td>
                <td className="px-4 py-4 text-center text-gray-500">{item.price.toFixed(2)}</td>
                <td className="px-4 py-4 text-center text-red-400">{item.discount > 0 ? `-${item.discount.toFixed(2)}` : '0.00'}</td>
                <td className="px-8 py-4 text-center font-bold" style={{ color: PRIMARY_DARK }}>{((item.price * item.quantity) - item.discount).toFixed(2)}</td>
                <td className="px-4 py-4 text-center font-bold" style={{ color: PRIMARY_ORANGE }}>{(((item.price * item.quantity) - item.discount) * 1.15).toFixed(2)}</td>
              </tr>
            ))}
            {[...Array(Math.max(0, 4 - (invoice.items?.length || 0)))].map((_, i) => (
              <tr key={`empty-${i}`} className="h-10"><td colSpan="6"></td></tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between p-8 border-t bg-gray-50/50">
          <div className="w-1/2 space-y-4">
            {(invoice.workOrders || []).length > 0 && (
              <div className="space-y-2">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">أوامر العمل المرتبطة</h4>
                <div className="flex flex-wrap gap-2">
                  {invoice.workOrders.map(wo => (
                    <span key={wo} className="bg-white border text-[10px] font-mono font-bold px-2 py-1 rounded">{wo}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="space-y-2">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ملاحظات</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed whitespace-pre-wrap">{invoice.notes}</p>
            </div>
          </div>
          <div className="w-1/3 space-y-2">
            <div className="flex justify-between text-xs py-1"><span className="text-gray-400">المجموع الفرعي</span><span className="font-bold">{totals.subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-xs py-1"><span className="text-gray-400">إجمالي الخصم</span><span className="font-bold text-red-500">-{totals.totalDiscount.toFixed(2)}</span></div>
            <div className="flex justify-between text-xs py-1"><span className="text-gray-400">الضريبة (VAT 15%)</span><span className="font-bold">{totals.taxAmount.toFixed(2)}</span></div>
            <div className="flex justify-between text-lg py-3 mt-4 border-t-2 font-black" style={{ borderColor: PRIMARY_DARK }}>
              <span style={{ color: PRIMARY_DARK }}>الإجمالي النهائي</span>
              <span style={{ color: PRIMARY_ORANGE }}>{totals.grandTotal.toFixed(2)} <span className="text-[10px]">ر.س</span></span>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gray-50 border-t flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-1 rounded-full" style={{ backgroundColor: PRIMARY_ORANGE }}></div>
          <p className="text-sm font-bold" style={{ color: PRIMARY_DARK }}>صدرت هذه الفاتورة قانونياً عن شركة الموارد للقوى البشرية</p>
          <p className="text-[10px] text-gray-400 max-w-lg">همة تك هي مشروع تابع لشركة الموارد للقوى البشرية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState('dashboard');
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeInvoice, setActiveInvoice] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 4000);
  };

  const fetchInvoices = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/invoices?select=*&order=created_at.desc`, { headers: supabaseHeaders });
      if (!res.ok) throw new Error('تعذر جلب البيانات. الرجاء التأكد من إعدادات RLS في قاعدة البيانات.');
      const data = await res.json();
      setInvoices(data || []);
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchInvoices(); }, []);

  const createNewInvoice = () => {
    const newInvoice = {
      id: `INV-${Date.now().toString().slice(-6)}`,
      date: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'Draft',
      customer: { name: '', phone: '', address: '', city: 'الرياض' },
      items: [{ id: Date.now(), description: '', quantity: 1, unit: 'ساعة', price: 0, discount: 0 }],
      workOrders: [],
      notes: 'تتضمن هذه الفاتورة أجور اليد فقط. قطع الغيار غير مشمولة ما لم يتم ذكر ذلك صراحة.',
      issuer: { parentName: 'الموارد للقوى البشرية', vatNo: '301123578700003', crNo: '1010000000', address: 'طريق الملك فهد، العليا', city: 'الرياض', phone: '+966 11 000 0000', email: 'info@almawarid.sa' }
    };
    setActiveInvoice(newInvoice);
    setView('editor');
  };

  const saveInvoiceToDb = async (invoiceData) => {
    setIsSaving(true);
    try {
      const payload = { id: invoiceData.id, date: invoiceData.date, dueDate: invoiceData.dueDate, status: invoiceData.status, customer: invoiceData.customer, items: invoiceData.items, workOrders: invoiceData.workOrders, notes: invoiceData.notes, issuer: invoiceData.issuer };
      const res = await fetch(`${SUPABASE_URL}/rest/v1/invoices`, {
        method: 'POST',
        headers: { ...supabaseHeaders, 'Prefer': 'resolution=merge-duplicates, return=representation' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) { const errorData = await res.json(); throw new Error(errorData.message || 'فشل في حفظ الفاتورة بالخادم'); }
      const [savedData] = await res.json();
      setInvoices(prev => {
        const index = prev.findIndex(inv => inv.id === savedData.id);
        if (index > -1) { const updated = [...prev]; updated[index] = savedData; return updated; }
        return [savedData, ...prev];
      });
      showToast('تم حفظ الفاتورة بنجاح وتزامنها مع الخادم', 'success');
      setView('dashboard');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const executeDelete = async (id) => {
    setDeleteConfirm(null);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/invoices?id=eq.${id}`, { method: 'DELETE', headers: supabaseHeaders });
      if (!res.ok) throw new Error('فشل في حذف الفاتورة من الخادم');
      setInvoices(prev => prev.filter(inv => inv.id !== id));
      showToast('تم حذف الفاتورة نهائياً', 'success');
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const duplicateInvoice = (invoice) => {
    const duplicated = { ...invoice, id: `INV-${Date.now().toString().slice(-6)}`, status: 'Draft', date: new Date().toISOString().split('T')[0], dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] };
    delete duplicated.created_at;
    setActiveInvoice(duplicated);
    setView('editor');
  };

  const filteredInvoices = useMemo(() => invoices.filter(inv => {
    const custName = inv.customer?.name || '';
    const matchesSearch = inv.id.toLowerCase().includes(searchTerm.toLowerCase()) || custName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || inv.status === filterStatus;
    return matchesSearch && matchesStatus;
  }), [invoices, searchTerm, filterStatus]);

  return (
    <div className="min-h-screen bg-gray-50 text-right relative" dir="rtl" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {toast.show && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 z-[100] flex items-center gap-3 px-6 py-3 rounded-xl shadow-2xl text-white transition-all ${toast.type === 'error' ? 'bg-red-600' : 'bg-green-600'}`}>
          {toast.type === 'error' ? <AlertCircle size={22} /> : <CheckCircle size={22} />}
          <span className="font-medium text-sm">{toast.message}</span>
        </div>
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full mx-auto" dir="rtl">
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <AlertCircle size={28} />
              <h3 className="text-xl font-bold text-gray-900">تأكيد الحذف</h3>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">هل أنت متأكد من حذف الفاتورة <span className="font-bold">#{deleteConfirm}</span>؟ سيتم مسحها نهائياً ولا يمكن التراجع.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDeleteConfirm(null)} className="px-5 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium">إلغاء</button>
              <button onClick={() => executeDelete(deleteConfirm)} className="px-5 py-2.5 text-white bg-red-600 hover:bg-red-700 rounded-xl font-bold">حذف نهائي</button>
            </div>
          </div>
        </div>
      )}

      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-start border-l pl-6">
              <img src={HEMAH_LOGO} alt="Hemah Tech" className="h-9 object-contain" />
            </div>
            <button onClick={() => setView('dashboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${view === 'dashboard' ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
              <LayoutDashboard size={18} /><span>لوحة التحكم</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end text-xs">
              <span className="text-gray-400">جهة الإصدار القانونية:</span>
              <span className="font-bold text-gray-700">الموارد للقوى البشرية</span>
            </div>
            <button onClick={createNewInvoice} className="text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm" style={{ backgroundColor: PRIMARY_ORANGE }}>
              <Plus size={18} /><span>فاتورة جديدة</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {view === 'dashboard' && (
          isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
              <RefreshCw className="animate-spin text-orange-500" size={40} />
              <p className="text-gray-500 font-medium">جاري المزامنة مع قاعدة البيانات...</p>
            </div>
          ) : (
            <Dashboard invoices={filteredInvoices} searchTerm={searchTerm} setSearchTerm={setSearchTerm}
              filterStatus={filterStatus} setFilterStatus={setFilterStatus}
              onEdit={(inv) => { setActiveInvoice(inv); setView('editor'); }}
              onDelete={(id) => setDeleteConfirm(id)} onDuplicate={duplicateInvoice}
              onView={(inv) => { setActiveInvoice(inv); setView('preview'); }} />
          )
        )}
        {view === 'editor' && <InvoiceEditor invoice={activeInvoice} onSave={saveInvoiceToDb} onCancel={() => setView('dashboard')} isSaving={isSaving} />}
        {view === 'preview' && <InvoicePreview invoice={activeInvoice} onBack={() => setView('dashboard')} onEdit={() => setView('editor')} />}
      </main>
    </div>
  );
}
