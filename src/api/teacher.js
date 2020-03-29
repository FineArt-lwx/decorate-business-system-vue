import request from '@/utils/request'

export function teacherList() {
  return request({
    url: '/teacher/all',
    method: 'get'
  })
}
