'use client'
import { useAuth } from '@/store/hooks/useAuth'

export default function SessionInitializer() {
    useAuth()
    return null
}