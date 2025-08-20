import { createClient } from '@supabase/supabase-js'

// Supabase configuration
// You'll need to create a free account at https://supabase.com
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://pvscumxvjlgwvydjnofp.supabase.co'
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2c2N1bXh2amxnd3Z5ZGpub2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NDE4MTEsImV4cCI6MjA3MDExNzgxMX0.3qXssp8Q8gPofoQFNA9hvSYnlrg658yTDWjKfpHLs3c'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database service functions
export const dbService = {
  // User management
  async createUser(userData) {
    const { data, error } = await supabase
      .from('users')
      .insert([userData])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getUser(userId) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error) throw error
    return data
  },

  async getUserByEmail(email) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()
    
    if (error) throw error
    return data
  },

  async updateUser(userId, updates) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Affiliate management
  async createAffiliate(affiliateData) {
    const { data, error } = await supabase
      .from('affiliates')
      .insert([affiliateData])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getAffiliate(affiliateId) {
    const { data, error } = await supabase
      .from('affiliates')
      .select('*')
      .eq('affiliate_id', affiliateId)
      .single()
    
    if (error) throw error
    return data
  },

  async getAffiliateByUserId(userId) {
    const { data, error } = await supabase
      .from('affiliates')
      .select('*')
      .eq('user_id', userId)
      .single()
    
    if (error) throw error
    return data
  },

  async updateAffiliate(affiliateId, updates) {
    const { data, error } = await supabase
      .from('affiliates')
      .update(updates)
      .eq('id', affiliateId)
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getAffiliateStats(affiliateId) {
    const { data, error } = await supabase
      .from('affiliates')
      .select('total_earnings, total_referrals')
      .eq('id', affiliateId)
      .single()
    
    if (error) throw error
    return data
  },

  // Referral tracking
  async createReferral(referralData) {
    const { data, error } = await supabase
      .from('referrals')
      .insert([referralData])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getReferralsByAffiliate(affiliateId) {
    const { data, error } = await supabase
      .from('referrals')
      .select('*')
      .eq('affiliate_id', affiliateId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async updateReferralStatus(referralId, status, conversionData = null) {
    const updates = { status, updated_at: new Date() }
    if (conversionData) {
      updates.conversion_amount = conversionData.amount
      updates.commission_earned = conversionData.commission
      updates.converted_at = new Date()
    }

    const { data, error } = await supabase
      .from('referrals')
      .update(updates)
      .eq('id', referralId)
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Assessment results
  async saveAssessmentResults(results) {
    const { data, error } = await supabase
      .from('assessments')
      .insert([results])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getAssessmentResults(userId) {
    const { data, error } = await supabase
      .from('assessments')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getAllAssessments() {
    const { data, error } = await supabase
      .from('assessments')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Payment tracking
  async recordPayment(paymentData) {
    const { data, error } = await supabase
      .from('payments')
      .insert([paymentData])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getPaymentsByUser(userId) {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getAllPayments() {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async updatePaymentCommission(paymentId, commissionData) {
    const { data, error } = await supabase
      .from('payments')
      .update({
        commission_paid: true,
        commission_amount: commissionData.amount,
        updated_at: new Date()
      })
      .eq('id', paymentId)
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Admin functions
  async logAdminAction(adminId, action, targetType, targetId, details) {
    const { data, error } = await supabase
      .from('admin_logs')
      .insert([{
        admin_id: adminId,
        id: adminId,
        action,
        target_type: targetType,
        target_id: targetId,
        details,
        ip_address: '127.0.0.1' // You can enhance this with real IP detection
      }])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getAdminLogs(limit = 100) {
    const { data, error } = await supabase
      .from('admin_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)
    
    if (error) throw error
    return data
  },

  async getAllUsers() {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getAllAffiliates() {
    const { data, error } = await supabase
      .from('affiliates')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Test function
  async testConnection() {
    const { data, error } = await supabase
      .from('test')
      .insert([{ message: 'Hello from Supabase!', timestamp: new Date() }])
      .select()
    
    if (error) throw error
    return data[0]
  }
}

export default supabase
