import { OperatingSystem } from './operating-system';

export interface Release {
  release_id: number;
  release_notes: string;
  enabled: boolean;
  name: string;
  package_file: string;
  icon_file: string;
  fingerprint: string;
  version: string;
  short_version: string;
  internal_build: number;
  size: number;
  bundle_identifier: string;
  commit_id: string;
  min_os: string;
  channle: string;
  os: OperatingSystem;
  environment: string;
  update_time: string;
  create_time: string;
}
