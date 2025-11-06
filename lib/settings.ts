/**
 * Maintenance Mode Check
 * Utility to check if site is in maintenance mode
 */

import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function isMaintenanceMode(): Promise<boolean> {
  try {
    const supabase = await createServerSupabaseClient()
    
    const { data, error } = await supabase
      .from('settings' as any)
      .select('value')
      .eq('key', 'maintenanceMode')
      .single()
    
    if (error || !data) {
      return false // Default to not in maintenance if error
    }
    
    return (data as any).value === 'true' || (data as any).value === true
  } catch (error) {
    console.error('Error checking maintenance mode:', error)
    return false
  }
}

export async function getSettings(): Promise<Record<string, any>> {
  try {
    const supabase = await createServerSupabaseClient()
    
    const { data, error } = await supabase
      .from('settings' as any)
      .select('*')
    
    if (error || !data) {
      return {}
    }
    
    // Convert array to object
    return data.reduce((acc: any, setting: any) => {
      acc[setting.key] = setting.value
      return acc
    }, {})
  } catch (error) {
    console.error('Error fetching settings:', error)
    return {}
  }
}

/**
 * Get a specific setting value
 */
export async function getSetting(key: string, defaultValue: any = null): Promise<any> {
  try {
    const supabase = await createServerSupabaseClient()
    
    const { data, error } = await supabase
      .from('settings' as any)
      .select('value')
      .eq('key', key)
      .single()
    
    if (error || !data) {
      return defaultValue
    }
    
    return (data as any).value || defaultValue
  } catch (error) {
    console.error(`Error getting setting ${key}:`, error)
    return defaultValue
  }
}
