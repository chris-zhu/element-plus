import { buildProps, definePropType, mutable } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type Sizes from './sizes.vue'

export const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true,
  },
  pageSizes: {
    type: definePropType<number[]>(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100] as const),
  },
  popperClass: {
    type: String,
  },
  disabled: Boolean,
  size: {
    type: String,
    default: 'default',
  },
} as const)

export type PaginationSizesProps = ExtractPropTypes<typeof paginationSizesProps>

export type SizesInstance = InstanceType<typeof Sizes>
