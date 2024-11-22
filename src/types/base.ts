import { Candidate } from '@/domain/entities/candidates'
import { ISendMessage } from '@/domain/entities/message'
import { IPhotoStorage } from '@/domain/entities/photos'
import { FilterUserInput, User } from '@/graphql/graphql.types'

export type ImageTemp = { uri: string; id: string; base64?: string }
export type ResizeModeImageType = 'cover' | 'contain' | 'stretch'
export interface ILevelsConfig {
  user: User | null | undefined
  filter: FilterUserInput
  currentChat: Candidate | null | undefined
  tempMessage: ISendMessage[]
  filesPaths: ImageTemp[]
  galleryUser: IPhotoStorage[]
}
