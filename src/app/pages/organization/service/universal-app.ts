import { Visibility } from './visibility';
import { OperatingSystem } from '../../application/service/operating-system';

enum NamespaceKind {
  User = 'User',
  Organization = 'Organization',
}

interface Namespace {
  path: String;
  kind: NamespaceKind;
}

export interface UniversalApp {
  namespace: Namespace;
  path: string;
  name: string;
  description: string;
  visibility: Visibility;
  enable_os: OperatingSystem[];
  update_time: string;
  create_time: string;
}
