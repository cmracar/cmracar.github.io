/** Tema seçiminin tarayıcıda saklandığı anahtar. */
export const THEME_STORAGE_KEY = 'theme'

/**
 * Sayfa çizilmeden önce <head> içinde çalışır: kayıtlı tema koyuysa uygular,
 * yoksa açık tema kalır. Böylece koyu tema seçen ziyaretçi bir an açık sayfa
 * görmez. Depolama erişilemezse (gizli pencere vb.) sessizce açık kalır.
 *
 * 'use client' dosyasında durmamalı: sunucu bileşeni (layout) bu metni
 * değer olarak okuyor.
 */
export const themeInitScript = `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`
